import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMetadata } from '../actions';
import Heading from './Heading';
import TextInput from './TextInput';
import Select from './Select';
import Button from './Button';
import FormProcessing from './FormProcessing';

const AddMetadata = ({policy, status}) => {
  const [formData, setFormData] = useState({
    id: policy.policy_id,
    organisation: policy.organisation,
    location: policy.location,
    date: policy.date,
    concerns: policy.concerns,
  })
  const [dataSaving, setDataSaving] = useState(false);
  const dispatch = useDispatch();
  const updateData = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMetadata(formData))
  }
  return (
    <>
      <Heading size={4}>Add or update metadata on this policy</Heading>
     
      <form onSubmit={handleSubmit} className="metadata-form mb-8 relative">

        {status.loading && <FormProcessing />}

        {status.processed && <p className="font-bold text-xl text-center text-green">Metadata saved.</p>}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
          <TextInput onChange={updateData} name="organisation" label="Organisation" value={formData.organisation} />
          <TextInput onChange={updateData} name="location" label="Country/State/City" value={formData.location} />
          <TextInput onChange={updateData} name="date" label="Date Last Updated" type="date" value={formData.date} />
          <Select onChange={updateData} name="concerns" value={formData.concerns} extraClasses="place-self-end w-full border border-lightgrey" label="Mitigation or Adaptation?" values={[
            {value: 'Mitigation', label: 'Mitigation'},
            {value: 'Adaptation', label: 'Adaptation'}
          ]} />
        </div>
        <div className="mt-2">
          <Button extraClasses="w-full md:w-48">SUBMIT</Button>
        </div>
        
      </form>
    </>
  )
}
export default AddMetadata; 