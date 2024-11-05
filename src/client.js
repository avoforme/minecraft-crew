import { createClient } from '@supabase/supabase-js'
const URL = 'https://bbwgubickfxnwrnsytyb.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJid2d1Ymlja2Z4bndybnN5dHliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NzIxMDQsImV4cCI6MjA0NjM0ODEwNH0.LI7Dra02xPO7JtrVxXr8-47GlqgUTICeyFXOS2xKJyc';

export const supabase = createClient(URL, API_KEY);