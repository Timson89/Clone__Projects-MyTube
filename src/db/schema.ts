import { pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";


export const users = pgTable('users', {

  id: uuid('id').primaryKey().defaultRandom(),
  clerkID: text('clerk_id').unique().notNull(),
  name: text('name').notNull(),
  // TODO: add banner fields
  imageURL: text('image_url').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),

}, (t) => [uniqueIndex('clerk_id_idx').on(t.clerkId)]);