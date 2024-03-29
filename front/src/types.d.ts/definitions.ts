export type IconProps = React.SVGProps<SVGSVGElement>

export interface MenuOptions {
  href: string
  text: string
  icon: (props: IconProps) => JSX.Element
}
export interface InputFields
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}
