import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import Row from "../../layouts/Row/Row";
import CardText from '../CardText/CardText';
import FarmPanel from './FarmPanel';
import SwapView from './SwapView';
import eggImage from '../../assets/image/egg.svg';

const FarmSwapCard = () => {

    const onTabSelect = (index: number, lastIndex: number, event: Event): boolean => {
        return true
    }
    const estDailyFeed = 0;

    return (
        <Wrapper>
            <Tabs 
                defaultIndex={0} 
                defaultFocus={true} 
                onSelect={onTabSelect}
                selectedTabClassName={"selected-tab"}
                disabledTabClassName={"disabled-tab"}
            >
                <TabList>
                    <Tab>FARM</Tab>
                    <Tab>SWAP</Tab>
                </TabList>

                <TabPanel>
                    <FarmPanel />
                </TabPanel>
                <TabPanel>
                    <SwapView />
                </TabPanel>
            </Tabs>
            <InfoLayout>
                <Row verticalAlign={'center'} gap={'5px'} horizontalAlign={'center'}>
                    <CardText text={estDailyFeed.toFixed(5)} size={'25px'} color={'white'}/>
                    <Image src={eggImage} />
                </Row>
                <CardText text={'TOTAL EGG HELD'} size={'12px'} color={'var(--highlight-color)'}/>
            </InfoLayout>
        </Wrapper>
    )

}

const Wrapper = styled.div`
    position: relative;
    padding: 3rem 1rem 1rem 1rem;
`;

const InfoLayout = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    text-align: center;
`
const Image = styled.img`
    width: 20px;
    height: 20px;
`;
export default FarmSwapCard;