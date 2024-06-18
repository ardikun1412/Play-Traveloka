import { mergeTests } from "@playwright/test";
import { test as homeFixtures } from "./home.fixtures";
import { test as headerFixtures } from "./header.fixtures";

export const test = mergeTests (homeFixtures, headerFixtures)