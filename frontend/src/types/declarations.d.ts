declare module "@fullpage/react-fullpage" {
  import { ComponentType } from "react";

  export interface FullPageApi {
    // 필요한 메소드 및 프로퍼티 정의 추가
  }

  export interface ReactFullpageProps {
    sectionsColor?: string[];
    scrollingSpeed?: number;
    controlArrows?: boolean;
    navigation?: boolean;
    onLeave?: (origin: any, destination: any, direction: string) => void;
    render?: (props: { state: any; fullpageApi: FullPageApi }) => JSX.Element;
  }

  const ReactFullpage: ComponentType<ReactFullpageProps>;
  export default ReactFullpage;
}
