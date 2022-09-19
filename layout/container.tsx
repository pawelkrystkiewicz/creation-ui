interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => <div className="flex min-h-screen w-full flex-col">{children}</div>

export default Container
