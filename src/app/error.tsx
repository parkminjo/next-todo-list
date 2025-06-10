'use client';

interface Props {
  error: Error;
}

const Error = ({ error }: Props) => {
  return (
    <div className='flex flex-col items-center gap-3'>
      <h1 className='text-2xl font-bold'>문제가 발생했습니다</h1>
      <p>죄송합니다. 요청을 처리하는 중에 오류가 발생했습니다.</p>
      <p className='text-sm text-gray-500'>오류 메시지: {error.message}</p>
    </div>
  );
};

export default Error;
