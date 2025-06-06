/*
  # Enable vector storage and create embeddings table

  1. New Tables
    - `embeddings`
      - `id` (uuid, primary key)
      - `content` (text)
      - `embedding` (vector(1536))
      - `metadata` (jsonb)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `embeddings` table
    - Add policy for authenticated users to read embeddings
*/

-- Enable the pgvector extension to work with embedding vectors
create extension if not exists vector;

-- Create a table for storing embeddings
create table if not exists embeddings (
  id uuid primary key default gen_random_uuid(),
  content text not null,
  embedding vector(1536),
  metadata jsonb,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table embeddings enable row level security;

-- Create a policy that allows all authenticated users to read embeddings
create policy "Allow authenticated users to read embeddings"
  on embeddings
  for select
  to authenticated
  using (true);

-- Create a function to search embeddings by similarity
create or replace function match_embeddings(
  query_embedding vector(1536),
  match_count int default 5
)
returns table (
  id uuid,
  content text,
  metadata jsonb,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    embeddings.id,
    embeddings.content,
    embeddings.metadata,
    1 - (embeddings.embedding <=> query_embedding) as similarity
  from embeddings
  order by embeddings.embedding <=> query_embedding
  limit match_count;
end;
$$;