import { Item } from "@/types/Item";
import { createClient, groq } from "next-sanity";
import { Hero } from "@/types/Hero";
import { Bakers } from "@/types/Bakers";

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
export async function getTraditions(): Promise<[Item]> {
  const traditions = createClient({
    projectId: "fqinbqr2",
    dataset: "production",
    apiVersion: "2024-07-17",
  });

  return traditions.fetch(
    groq`*[_type == "traditions"]{
    heading,
    "image": image.asset->url,
    content,
    }`
  );
}
export async function getBakers(): Promise<[Bakers]> {
  const bakers = createClient({
    projectId: "fqinbqr2",
    dataset: "production",
    apiVersion: "2024-07-17",
  });

  return bakers.fetch(
    groq`*[_type == "bakers"]{
    _id,
    heading,
    "bakersList": *[_type == "baker"]{
    key,
    name,
    "image": image.asset->url,
    content
      }
    }`
  );
}
