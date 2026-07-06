// Pre-lanzamiento: bloquea rastreo salvo que PUBLIC_ALLOW_INDEXING=true (se fija en Vercel al lanzar)
export const GET = () => {
  const allow = import.meta.env.PUBLIC_ALLOW_INDEXING === 'true';
  const body = allow ? 'User-agent: *\nAllow: /\n' : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
