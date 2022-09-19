interface ContainerProps {
  children: React.ReactNode
}

const Content = ({ children }: ContainerProps) => (
  <div className="w-full  p-5 sm:px-8 py-10 mx-auto">{children}</div>
)

export default Content
