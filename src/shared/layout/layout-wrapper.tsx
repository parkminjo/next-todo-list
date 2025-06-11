interface Props {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className='mx-auto flex min-h-screen max-w-[800px] flex-col'>
      {children}
    </div>
  );
};

export default LayoutWrapper;
