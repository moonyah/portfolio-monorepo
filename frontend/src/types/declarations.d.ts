declare module '@fullpage/react-fullpage' {
  import { ComponentType } from 'react';

  // Define the structure of origin and destination
  interface FullPageSection {
    index: number;
    anchor: string;
    item: HTMLElement;
  }

  interface FullPageApi {
    // Define the methods you plan to use from the FullPage API
    moveTo(section: string | number): void;
    silentMoveTo(section: string | number): void;
    setAllowScrolling(allow: boolean): void;
    // Add other methods as needed
  }

  interface FullPageState {
    // Define properties of state based on your usage
    // For example:
    // currentSlide: number;
    // isScrolling: boolean;
    // Add more properties as needed
  }

  interface ReactFullpageProps {
    sectionsColor?: string[];
    scrollingSpeed?: number;
    controlArrows?: boolean;
    navigation?: boolean;
    onLeave?: (
      origin: FullPageSection,
      destination: FullPageSection,
      direction: string
    ) => void;
    render?: (props: {
      state: FullPageState;
      fullpageApi: FullPageApi;
    }) => JSX.Element;
  }

  const ReactFullpage: ComponentType<ReactFullpageProps>;
  export default ReactFullpage;
}
