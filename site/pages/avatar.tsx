import Avatar from '@cui/core/components/avatar'

const Home = () => {
  const src =
    'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg'
  const variants = [
    {
      title: 'Small',
      props: {
        size: 'sm',
        label: 'Small',
        src,
      },
    },
    {
      title: 'Medium',
      props: {
        size: 'md',
        label: 'Medium',
        src,
      },
    },
    {
      title: 'Large',
      props: {
        size: 'lg',
        label: 'Large',
        src,
      },
    },
    {
      title: 'Variant: Square',
      props: {
        size: 'md',
        variant: 'square',
        src,
      },
    },
    {
      title: 'Variant: Rounded',
      props: {
        size: 'md',
        variant: 'rounded',
        src,
      },
    },
    {
      title: 'Notification dot R B',
      props: {
        variant: 'circle',
        size: 'sm',
        src,
        badge: {
          type: 'dot',
          pulse: true,
        },
      },
    },
    {
      title: 'Notification dot R T',
      props: {
        variant: 'circle',
        size: 'sm',
        src,
        badge: {
          type: 'dot',
          placement: { horizontal: 'right', vertical: 'top' },
        },
      },
    },
    {
      title: 'Notification count L T',
      props: {
        variant: 'circle',
        size: 'sm',
        src,
        badge: {
          type: 'count',
          count: 99,
          placement: { horizontal: 'left', vertical: 'top' },
        },
      },
    },
    {
      title: 'Notification L B',
      props: {
        variant: 'circle',
        size: 'sm',
        src,
        badge: {
          type: 'count',
          count: 5,
          placement: { horizontal: 'left', vertical: 'bottom' },
        },
      },
    },
  ]

  return (
    <>
      <div className='flex flex-col gap-5'>
        {variants.map(({ title, props }) => (
          <div className='w-full' key={title}>
            <p>{title}</p>
            <Avatar {...(props as any)} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
