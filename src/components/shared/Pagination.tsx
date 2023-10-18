import Ionicons from 'react-native-vector-icons/Ionicons';
import { Heading, Button, FlexBox } from '../../components';
import { IPaginationProps } from '../../interfaces';
import { Colors } from '../../constants';

function Pagination(props: IPaginationProps) {
  const { data, currentPage, setcurrentPage, isPreviousData, isFetching } = props;

  const handlePrevPage = () => {
    setcurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  }

  const handleNextPage = () => {
    if (!isPreviousData && data && data.length > 0) {
      setcurrentPage((prevPage) => prevPage + 1);
    }
  }

  return (
    <FlexBox flexDirection='row' alignItems='center' columnGap={12}>
      <Button
        title='Prev'
        backgroundColor={Colors.PURPLE}
        titleColor={Colors.WHITE}
        onPress={handlePrevPage}
        isDisabled={currentPage === 0}
      />
      <Heading 
        title={`${currentPage + 1}`}
        type={5}
        fontWeight='500'
      />
      <Button
        title='Next'
        backgroundColor={Colors.PURPLE}
        titleColor={Colors.WHITE}
        onPress={handleNextPage}
        isDisabled={isPreviousData || isFetching}
      />
    </FlexBox>
  )
}

export default Pagination;
