import type { NextPage } from 'next';
import Head from 'next/head';
import AlertComponent from './UI/AlertComponent';
import CrightComponent from './UI/CrightComponent';
import { useDarkMode } from './Hook/useDarkMode';

/**
 * Children is a type that has a property called children that is a JSX.Element.
 * @property children - The children of the component.
 */
type Children = {
  children: JSX.Element;
};

const Layout: NextPage<Children> = ({ children }): JSX.Element => {
  const [colorTheme, DarkMode] = useDarkMode();

  const DarkModeComponent = () => {
    return DarkMode;
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AlertComponent text="It should be like dynamic error" type="danger" />
      <div className="container mt-8 mb-3">{children}</div>
      <CrightComponent />
      <DarkModeComponent />
    </>
  );
};

export default Layout;
