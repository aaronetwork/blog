---
title: "What is Cosmos address reputation from Aaron Network?"
description: "Find out what address reputation is, how it works and what it is for"
date: "Oct 10 2024"
---

#### Introduction to the Cosmos Ecosystem

Cosmos (ATOM) is an inter-blockchain ecosystem that enables the creation, management, and integration of independent blockchains through the IBC (Inter-Blockchain Communication) protocol. This allows users to interact with multiple blockchains, exchange data, and perform transactions seamlessly. However, as decentralized platforms grow and the number of participants increases, a key issue arises: how can users trust one another in an environment where anonymity is often a central feature?

#### The Trust Problem and Reputation as a Solution

In decentralized networks, trust between participants becomes especially critical. When interacting with blockchain addresses, users don’t know who is behind the address—whether it’s a legitimate participant, a fraudster, or simply a new user with no transaction history. To minimize the risks of interacting with suspicious addresses, a reputation system for blockchain addresses was developed.

**Address reputation** in the Cosmos ecosystem is a system that assesses the activity and reliability of blockchain addresses. While it doesn’t directly impact the functional capabilities of an address (like conducting transactions), it provides valuable information that can help users make informed decisions when interacting with others. This system enhances communication transparency and reduces the risks of fraud when using decentralized applications and platforms.

#### How the Address Reputation System Works

The reputation system analyzes the actions of an address on the blockchain, including:

| #  | Value                                         | Chain                               | Notice                                                                                                  | Score             |
|:---|:----------------------------------------------|:------------------------------------|:--------------------------------------------------------------------------------------------------------|:------------------|
| 1  | Last activity                                 | Osmosis, Cosmos Hub, Dydx, OmniFlix | Last activiry < 720 hours                                                                               | +1.0 for chain    |
| 2  | Last activity                                 | Osmosis, Cosmos Hub, Dydx, OmniFlix | Last activiry >= 720 hours                                                                              | +0.5 for chain    |
| 3  | Balances                                      | All supported chains                | Balance > 0.01                                                                                          | +0.5 for chain    |
| 4  | Staking                                       | Except neutron                      | if there is no staking                                                                                  | -1.0 total        |
| 5  | Staking                                       | Except neutron                      | if there is staking. The score depends on the staking size.                                             | +0.1-10 for chain |
| 6  | Votes                                         | Except neutron                      | Abstainers get the lowest score                                                                         | +0.1, +3          |
| 7  | NFTs                                          | Stargaze, OmniFlix                  | The score depends on the nfts count                                                                     | +1.0-4.0          |
| 8  | OmniFlix channel                              | OmniFlix                            | Score is awarded for having a channel                                                                   | +3.5              |
| 9  | Validators                                    | All                                 | The score is calculated if the address is validator                                                     | +60               |
| 10 | Proposals                                    | Except neutron                       | The score is calculated if the address was created proposal and the proposal was received no with vetto | -1000             |
| 11 | Proposals                                    | Except neutron                       | The score is calculated if the address was created proposal                         | +10               |

This data is then converted into a reputation score, which is displayed to the user when interacting with an address. While reputation is purely informational and does not restrict users’ actions, it helps them assess the risks associated with communicating or engaging with specific addresses.

Default score (for newly created addresses) = **-1.0**

#### Why Reputation is Important for the Messaging Platform

Our future messaging platform will integrate the address reputation system, allowing users to:

1. **Evaluate the reliability of a contact** — before starting a conversation, users can check whether an address has a positive or negative reputation.
2. **Increase transparency in communication** — users will be able to see how active an address is, helping to reduce the risks of fraud when exchanging information.
3. **Prevent fraud** — if an address has a low or suspicious reputation, users can make an informed decision about whether to continue interacting.

#### Support for Various Cosmos Networks

Currently, the reputation system supports **31 networks**, though not all networks can be integrated due to technical limitations. This is because different networks have varying infrastructures and may lack the necessary API access for integration. Despite this, we are working to expand the number of supported networks.

#### Supported networks

| #  | Chain       | Support | Notice |
|:---|:------------|:--------|:-------|
| 1  | Osmosis     | Yes     |        |
| 2  | Cosmos Hub  | Yes     |        |
| 3  | Celestia    | Yes     |        |
| 4  | Stride      | Yes     |        |
| 5  | Axelar      | Yes     |        |
| 6  | Juno        | Yes     |        |
| 7  | Akash       | Yes     |        |
| 8  | OmniFlix    | Yes     |        |
| 9  | Saga        | Yes     |        |
| 10 | Stargaze    | Yes     |        |
| 11 | Sommelier   | Yes     |        |
| 12 | Sei         | Yes     |        |
| 13 | GovGen      | Yes     |        |
| 14 | Tori        | Yes     |        |
| 15 | Neutron     | Yes     |        |
| 16 | Dydx        | Yes     |        |
| 17 | Archway     | Yes     |        |
| 18 | Persistence | Yes     |        |
| 19 | Chihuahua   | Yes     |        |
| 20 | UX (Umee)   | Yes     |        |
| 21 | Passage     | Yes     |        |
| 22 | Likecoin    | Yes     |        |
| 23 | Comdex      | Yes     |        |
| 24 | Fetch       | Yes     |        |
| 25 | Cudos       | Yes     |        |
| 26 | Kyve        | Yes     |        |
| 27 | Iris        | Yes     |        |
| 28 | Regen       | Yes     |        |
| 29 | Jackal      | Yes     |        |
| 30 | Kujira      | Yes     |        |
| 31 | Nolus       | Yes     |        |

#### Conclusion

Address reputation in the Cosmos ecosystem is an important step toward increasing trust and security in the decentralized world. It helps users make more informed decisions when interacting with other network participants. Although there are technical limitations, the reputation system already supports many networks, which enhances transparency and reliability in interactions. In the future, this system will become an essential part of the messaging platform, providing users with the necessary information for secure communication.

