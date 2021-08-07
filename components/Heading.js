import { useEffect } from 'react';

const Heading = ({size, extraClasses, children}) => {
  const CustomHeading = `h${size}`
  let sizingClasses;

    switch(size) {
      case 1:
        sizingClasses = 'text-3xl md:text-4xl lg:text-5xl';
        break;
      case 2:
        sizingClasses = 'text-2xl md:text-3xl lg:text-4xl';
        break;
      case 3:
        sizingClasses = 'text-xl md:text-2xl lg:text-3xl';
        break;
      case 4:
        sizingClasses = 'text-lg md:text-xl lg:text-2xl';
        break;
      default:
        sizingClasses = 'text-3xl md:text-4xl lg:text-5xl';
    }

    return (
      <>
      <CustomHeading className={`${sizingClasses} my-4 font-heading font-bold ${extraClasses}`}>{children}</CustomHeading>
      </>
    )

}
export default Heading;