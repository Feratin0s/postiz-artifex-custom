import SafeImage from '@gitroom/react/helpers/safe.image';
import { APP_NAME } from '@gitroom/frontend/utils/brand';

export const ArtifexTechLogoText = () => (
  <div className="flex items-center gap-[10px]">
    <SafeImage
      src="/logo_postiz_artifex.svg"
      alt="Artipost"
      width={36}
      height={36}
      className="h-[36px] w-[36px] object-contain"
    />
    <span className="text-[16px] font-semibold">{APP_NAME}</span>
  </div>
);