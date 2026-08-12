-- CTC-Kenya Database Migrations
-- Run these SQL commands in your Supabase SQL Editor

-- Table: contact_submissions
-- Stores contact form submissions from the website
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
  ON contact_submissions (created_at DESC);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow service role to insert and select
-- (The backend uses the service role key)
CREATE POLICY "Allow service role full access"
  ON contact_submissions
  FOR ALL
  USING (true)
  WITH CHECK (true);