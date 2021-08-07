import Heading from './Heading';
import TextInput from './TextInput';
import Select from './Select';
import Button from './Button';

const AddMetadata = () => {
  return (
    <>
      <Heading size={4}>Add metadata to this policy</Heading>
      <form className="mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
          <TextInput label="Organisation" />
          <TextInput label="Country/State/City" />
          <TextInput label="Date Last Updated" type="date" />
          <Select extraClasses="place-self-end w-full border border-lightgrey" label="Mitigation or Adaptation?" />
        </div>
        <div className="mt-2">
          <Button extraClasses="w-full md:w-48">SUBMIT</Button>
        </div>
        
      </form>
    </>
  )
}
export default AddMetadata; 