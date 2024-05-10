// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "What are the steps for sole source contracts?", value: "What are the steps for sole source contracts?" },
    { text: "Is a decision to contract form required for an interagency agreement?", value: "Is a decision to contract form required for an interagency agreement?" },
    { text: "Do I need training before creating a payable contract?", value: "Do I need training before creating a payable contract?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
