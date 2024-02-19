export default function supabaseLoader({ src }) {
  return `https://tvleyqfprpfmegrcnshe.supabase.co/storage/v1/object/public/images/${src}`;
}
