export type IconProps = React.SVGProps<SVGSVGElement>

export interface MenuOptions {
  href: string
  text: string
  icon: (props: IconProps) => JSX.Element
}
export interface InputFields {
  id: number
  label: string
  placeholder?: string
  name: string
  type: React.HTMLInputTypeAttribute
  autoCapitalize?: boolean
}
