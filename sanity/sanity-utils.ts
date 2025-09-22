import { Item } from "@/types/Item";
import { createClient, groq } from "next-sanity";
import { Hero } from "@/types/Hero";

export async function getBakers(): Promise<[Item]> {
  const baker = createClient({
    projectId: "fqinbqr2",
    dataset: "production",
    apiVersion: "2024-07-17",
  });

  return baker.fetch(
    groq`*[_type == "baker"]{
    _id,
    _createdAt,
    name,
    "image": image.asset->url,
    content
    }`
  );
}

export async function getFormats(): Promise<[Item]> {
  const format = createClient({
    projectId: "fqinbqr2",
    dataset: "production",
    apiVersion: "2024-07-17",
  });

  return format.fetch(
    groq`*[_type == "format"]{
    _id,
    _createdAt,
    name,
    "image": image.asset->url,
    content
    }`
  );
}

export async function getHero(): Promise<[Hero]> {
  const hero = createClient({
    projectId: "fqinbqr2",
    dataset: "production",
    apiVersion: "2024-07-17",
  });

  return hero.fetch(
    groq`*[_type == "hero"]{
    _id,
    _createdAt,
    heading,
    "image": image.asset->url,
    }`
  );
}
