interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => (
  <div className='flex min-h-screen w-full flex-col bg-white dark:bg-slate-800'>
    {children}
  </div>
)

export default Container
