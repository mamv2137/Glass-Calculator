import tw from "twin.macro";

const Tab = tw.span<{ isActive: boolean }>`
    flex items-center text-gray-400 font-semibold px-14 cursor-pointer
    ${({ isActive }) => isActive && 'bg-pink-tab rounded-full text-gray-800'}
`;

export default Tab;
