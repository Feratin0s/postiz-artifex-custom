export const PostizAttribution = ({
  sourceCodeUrl,
}: {
  sourceCodeUrl?: string;
}) => (
  <p className="flex flex-wrap items-center justify-center gap-x-[4px] gap-y-[2px] text-center text-[11px] leading-[16px] text-slate-400">
    <span>Artipost da ArtifexTech é baseado no</span>
    <a
      href="https://github.com/gitroomhq/postiz-app"
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 hover:text-white"
    >
      Postiz
    </a>
    <span>, licenciado sob a AGPL-3.0.</span>
    {sourceCodeUrl && (
      <a
        href={sourceCodeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 hover:text-white"
      >
        Código-fonte desta versão
      </a>
    )}
  </p>
);