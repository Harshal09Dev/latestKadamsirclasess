/*
  # Create Student Achievements Table

  1. New Tables
    - `achievements`
      - `id` (uuid, primary key) - Unique identifier for each achievement
      - `title` (text) - Achievement title/headline
      - `description` (text) - Detailed description of the achievement
      - `image_url` (text) - URL to the achievement poster/image
      - `achievement_date` (date) - Date of the achievement
      - `display_order` (integer) - Order in which to display achievements
      - `is_active` (boolean) - Whether to show this achievement
      - `created_at` (timestamptz) - Timestamp of creation
      - `updated_at` (timestamptz) - Timestamp of last update

  2. Security
    - Enable RLS on `achievements` table
    - Add policy for public read access (achievements are public)
    - Add policy for authenticated insert/update (for admin management)

  3. Notes
    - Achievements will be displayed in a banner/carousel on the website
    - Public can view achievements, but only authenticated users can manage them
*/

CREATE TABLE IF NOT EXISTS achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text,
  achievement_date date DEFAULT CURRENT_DATE,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active achievements"
  ON achievements
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert achievements"
  ON achievements
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update achievements"
  ON achievements
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete achievements"
  ON achievements
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_achievements_display_order ON achievements(display_order);
CREATE INDEX IF NOT EXISTS idx_achievements_active ON achievements(is_active);
