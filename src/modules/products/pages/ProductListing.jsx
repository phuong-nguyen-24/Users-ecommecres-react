import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import supabase from "../../../config/supabase";
import Loading from "../../common/components/Loading";
import ProductCard from "../components/ProductCard";

export default function ProductListing() {
  const { category } = useParams();
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      supabase
        .from("product")
        .select("id, title, price, thumbnail, rating, category!inner (name)")
        .eq("category.name", category),
    select: (res) => res.data,
  });

  if (isLoading) return <Loading />;

  return (
    <div>
      <Container>
        <Grid container spacing={2} py={10}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={3}>
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                imageUrl={product.thumbnail}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
