interface Props {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className='mx-auto flex min-h-screen max-w-[400px] flex-col md:max-w-[800px]'>
      {children}
    </div>
  );
};

export default LayoutWrapper;
