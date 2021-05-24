import tw from 'twin.macro';
import styled from '@emotion/styled';

const Tab = styled.span<{ isActive?: boolean }>`
  ${tw`flex items-center text-gray-400 font-semibold px-14 cursor-pointer`}
  ${({ isActive }) => isActive && tw`bg-pink-tab rounded-full text-gray-800`}
`;

export default Tab;
