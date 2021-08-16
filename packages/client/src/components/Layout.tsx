import { ComponentChildren } from 'preact';

export interface LayoutProps {
  children: ComponentChildren | (() => ComponentChildren);
}

export const Layout: FC<LayoutProps> = (props) => {
  const {
    children,
  } = props;

  const renderContent = () => {
    if (children instanceof Function) {
      return children();
    }
    return children;
  };

  return (
    <div class="w-full h-full bg-black">
      <main class="mx-auto max-w-md bg-white flex flex-col h-full">
        {renderContent()}
      </main>
    </div>
  );
}
