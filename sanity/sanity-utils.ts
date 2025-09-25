import { createClient, groq } from "next-sanity";

import { Bakers } from "@/types/Bakers";
import { Features } from "@/types/Features";
import { Format } from "@/types/Formats";
import { Header } from "@/types/Header";
import { Hero } from "@/types/Hero";
import { Item } from "@/types/Item";

export async function getFormats(): Promise<[Format]> {
  const format = createClient({
    apiVersion: "2024-07-17",
    dataset: "production",
    projectId: "fqinbqr2",
  });

  return format.fetch(
    groq`*[_type == "formats"]{
    _id,
    heading,
    bakeryTypes[]{
      _key,
      name,
      "image": image.asset->url,
      content
      }
    }`
  );
}

export async function getHeader(): Promise<[Header]> {
  const header = createClient({
    apiVersion: "2024-07-17",
    dataset: "production",
    projectId: "fqinbqr2",
  });

  return header.fetch(
    groq`*[_type == "header"]{
      navigation[]{
      title,
      sectionId
      }
    }`
  );
}

export async function getFooter(): Promise<[Header]> {
  const footer = createClient({
    apiVersion: "2024-07-17",
    dataset: "production",
    projectId: "fqinbqr2",
  });

  return footer.fetch(
    groq`*[_type == "footer"]{
      navigation[]{
      title,
      sectionId
      },
      phone,
      email,
      address,
    }`
  );
}

export async function getBakers(): Promise<[Bakers]> {
  const bakers = createClient({
    apiVersion: "2024-07-17",
    dataset: "production",
    projectId: "fqinbqr2",
  });

  return bakers.fetch(
    groq`*[_type == "bakers"]{
    _id,
    heading,
    "bakersList": *[_type == "baker"]{
    ...,
    _id,
    name,
    "image": image.asset->url,
    content
      }
    }`
  );
}

export async function getFeatures(): Promise<[Features]> {
  const feature = createClient({
    apiVersion: "2024-07-17",
    dataset: "production",
    projectId: "fqinbqr2",
  });

  return feature.fetch(
    groq`*[_type == "features"]{
    _id,
    heading,
    advantages
    }`
  );
}

export async function getHero(): Promise<[Hero]> {
  const hero = createClient({
    apiVersion: "2024-07-17",
    dataset: "production",
    projectId: "fqinbqr2",
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
    apiVersion: "2024-07-17",
    dataset: "production",
    projectId: "fqinbqr2",
  });

  return traditions.fetch(
    groq`*[_type == "traditions"]{
    heading,
    "image": image.asset->url,
    content,
    }`
  );
}
