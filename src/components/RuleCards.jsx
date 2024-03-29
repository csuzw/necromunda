import React from 'react';
import RuleCard from '../components/RuleCard.jsx';

import { gangHelper } from '../data/helpers/gangHelper';

export default function RuleCards(props) {

    let rulesData = gangHelper.getRulesData(props.gang);
    return (
        <div className="rule-cards">
            {rulesData.map((rule, i) => <RuleCard rule={rule} key={i} />)}
        </div>
    );
}