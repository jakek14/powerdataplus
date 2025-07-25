declare module '@tabler/icons-react' {
  import { ReactElement, SVGProps } from 'react';
  
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    stroke?: number | string;
  }
  
  export const IconEye: (props: IconProps) => ReactElement;
  export const IconUsers: (props: IconProps) => ReactElement;
  export const IconChartBar: (props: IconProps) => ReactElement;
  export const IconTarget: (props: IconProps) => ReactElement;
  export const IconBrain: (props: IconProps) => ReactElement;
  export const IconBoxAlignRightFilled: (props: IconProps) => ReactElement;
  export const IconClipboardCopy: (props: IconProps) => ReactElement;
  export const IconFileBroken: (props: IconProps) => ReactElement;
  export const IconSignature: (props: IconProps) => ReactElement;
  export const IconTableColumn: (props: IconProps) => ReactElement;
} 