import { LayoutComponent } from '@gitroom/frontend/components/new-layout/layout.component';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutComponent sourceCodeUrl={process.env.SOURCE_CODE_URL}>
      {children}
    </LayoutComponent>
  );
}
