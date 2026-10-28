import SafeImage from '@gitroom/react/helpers/safe.image';

export const ArtifexTechLogo = () => (
  <SafeImage
    src="/logo_postiz_artifex.svg"
    alt="Artipost"
    width={60}
    height={60}
    className="mt-[8px] min-h-[60px] min-w-[60px] object-contain"
  />
);