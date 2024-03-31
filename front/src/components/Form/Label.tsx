export interface PropsLabel
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string
  children: React.ReactNode
}

export default function Label({ label, children, ...props }: PropsLabel) {
  return (
    <label className='inline-block mb-3' {...props}>
      <div className='mb-3 text-app-color font-bold uppercase'>
        {label} <span className='text-red-500 font-bold'>*</span>
      </div>

      {children}
    </label>
  )
}
