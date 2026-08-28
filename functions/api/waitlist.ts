// Cloudflare Pages Function — POST /api/waitlist
//
// NOT invoked by `next dev` or `next build`; this only runs once the site
// is actually deployed to Cloudflare Pages, via Cloudflare's own Functions
// runtime (the `functions/` directory at the project root is its
// convention, separate from Next's `src/app` routing). Requires a KV
// namespace bound to this Pages project as `WAITLIST` — create one with
// `wrangler kv namespace create WAITLIST` and bind it in the Pages
// project's Settings → Functions → KV namespace bindings. Until that
// binding exists, this responds 503 rather than throwing, so the frontend
// form degrades to a visible "try again" message instead of a silent
// failure.
//
// Deliberately untyped (`context: any`) rather than pulling in
// `@cloudflare/workers-types` as a new dependency for one small function.

type WaitlistContext = {
  request: Request;
  env: {
    WAITLIST?: {
      put(key: string, value: string): Promise<void>;
    };
  };
};

export const onRequestPost = async (context: WaitlistContext) => {
  try {
    const body = await context.request.json();
    const email = String(body?.email || "")
      .trim()
      .toLowerCase();
    const moduleName = String(body?.module || "general")
      .trim()
      .slice(0, 40);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email) || email.length > 254) {
      return new Response(
        JSON.stringify({ ok: false, error: "invalid_email" }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }

    const kv = context.env.WAITLIST;
    if (!kv) {
      return new Response(
        JSON.stringify({ ok: false, error: "not_configured" }),
        { status: 503, headers: { "content-type": "application/json" } }
      );
    }

    const key = `${moduleName}:${email}`;
    await kv.put(
      key,
      JSON.stringify({ email, module: moduleName, at: new Date().toISOString() })
    );

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "content-type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "server_error" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
};
