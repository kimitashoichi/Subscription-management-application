import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as Models from "../../models/CardModels";
import { AppState } from "../../models/index";
import { GetAllCardAction } from "../../actions/cardActions";

import TopSubscriptionCardContainer from "../../components/subscription-card/TopSubscriptionCardContainer";

interface Props {
  getAllCard: () => void;
  isLoading: boolean;
  allCards: Models.CardBody[]
}

const ShowSubscriptionCard: React.FC<Props> = ({
  getAllCard,
  allCards
}) => {
  useEffect(() => {
    getAllCard();
  }, [])

  return (
    <>
      {allCards.length > 0 ?
       allCards.map(card => {
         return (
          <TopSubscriptionCardContainer card={card}/>
         )
       })
      :
       <div>No Cards</div>
      }
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.card.isLoading,
  allCards: state.card.getAllCardBody,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    getAllCard: () => GetAllCardAction.start()
  }, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowSubscriptionCard)