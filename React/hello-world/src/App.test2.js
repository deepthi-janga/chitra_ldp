import {shallow} from 'enzyme';
import { SampleTest } from './SampleComponent'

describe('testing SampleTest component', () => {
    let wrapper;
    beforeEach(() => { wrapper = shallow(<SampleTest/>);});

    it('includes 1 div with class class1',() => {

expect(wrapper.find('span.class2').text()).to.be.equal('testing');
    })

})