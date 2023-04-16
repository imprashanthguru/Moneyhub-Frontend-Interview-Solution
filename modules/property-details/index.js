/* eslint-disable max-statements */
import { add, format } from "date-fns";
import React, { useState, useEffect } from "react";
import { Button, ValuationButton } from "../../components/button";
import RowContainer from "../../components/row-container";
import {
  AccountHeadline,
  AccountLabel,
  AccountList,
  AccountListItem,
  AccountSection,
  InfoText,
  Inset,
} from "./style";


const account = {
  uid: "65156cdc-5cfd-4b34-b626-49c83569f35e",
  deleted: false,
  dateCreated: "2020-12-03T08:55:33.421Z",
  currency: "GBP",
  name: "15 Temple Way",
  bankName: "Residential",
  type: "properties",
  subType: "residential",
  originalPurchasePrice: 250000,
  originalPurchasePriceDate: "2017-09-03",
  recentValuation: { amount: 310000, status: "good" },
  associatedMortgages: [
    {
      name: "HSBC Repayment Mortgage",
      uid: "fb463121-b51a-490d-9f19-d2ea76f05e25",
      currentBalance: -175000,
    },
  ],
  canBeManaged: false,
  postcode: "BS1 2AA",
  lastUpdate: "2020-12-01T08:55:33.421Z",
  updateAfterDays: 30,
};

const Detail = ({}) => {
  let mortgage;

  const [accountData, setAccountData] = useState(null);
  useEffect(() => {
    fetch("/api/account")
      .then((res) => res.json())
      .then((data) => setAccountData(data.account))
      .catch((err) => {
        console.log("Error with API call ", err);
      });
  }, []);

  const lastUpdate = new Date(accountData && accountData.lastUpdate);
  if (accountData && accountData.associatedMortgages.length) {
    mortgage = accountData.associatedMortgages[0];
  }

  const sincePurchase = Math.abs(accountData && accountData.recentValuation.amount) - Math.abs(accountData && accountData.originalPurchasePrice);
  const sincePurchasePercentage = sincePurchase / Math.abs(accountData && accountData.originalPurchasePrice);
  const purchaseDate = accountData && accountData.originalPurchasePriceDate;
  const purchaseYear = purchaseDate && purchaseDate.split("-")[0];
  const annualAppreciation = sincePurchasePercentage / Math.abs(new Date().getFullYear() - purchaseYear);

  return (
    <div>
      {accountData && (
        <Inset>
          <AccountSection>
            <AccountLabel>Estimated Value</AccountLabel>
            <AccountHeadline>
              {new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
              }).format(accountData.recentValuation.amount)}
            </AccountHeadline>
            <AccountList>
              <AccountListItem>
                <InfoText>
                  {`Last updated ${format(lastUpdate, "do MMM yyyy")}`}
                </InfoText>
              </AccountListItem>
              <AccountListItem>
                <InfoText>
                  {`Next update ${format(
                    add(lastUpdate, { days: accountData.updateAfterDays }),
                    "do MMM yyyy"
                  )}`}
                </InfoText>
              </AccountListItem>
            </AccountList>
          </AccountSection>
          <AccountSection>
            <AccountLabel>Property details</AccountLabel>
            <RowContainer>
              <AccountList>
                <AccountListItem>
                  <InfoText>{accountData.name}</InfoText>
                </AccountListItem>
                <AccountListItem>
                  <InfoText>{accountData.bankName}</InfoText>
                </AccountListItem>
                <AccountListItem>
                  <InfoText>{accountData.postcode}</InfoText>
                </AccountListItem>
              </AccountList>
            </RowContainer>
          </AccountSection>
          <AccountSection>
            <AccountLabel>Valuation Changes</AccountLabel>
            <RowContainer>
              <AccountList>
                <AccountListItem>
                  <InfoText>
                    Purchased for{" "}
                    <strong>
                      {new Intl.NumberFormat("en-GB", {
                        style: "currency",
                        currency: "GBP",
                        minimumFractionDigits: 0,
                      }).format(Math.abs(account.originalPurchasePrice))}
                    </strong>{" "}
                    in {format(lastUpdate, "MMMM yyyy")}
                  </InfoText>
                </AccountListItem>
              </AccountList>
            </RowContainer>
            <AccountList>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <AccountListItem>
                  <InfoText>Since Purchase</InfoText>
                </AccountListItem>
                <AccountListItem>
                  <div style={{ width: "100px", height: "30px" }}>
                    <ValuationButton>
                      <strong>
                        {new Intl.NumberFormat("en-GB", {
                          style: "currency",
                          currency: "GBP",
                          minimumFractionDigits: 0,
                        }).format(sincePurchase)}
                        (
                        {new Intl.NumberFormat("en-US", {
                          style: "percent",
                        }).format(sincePurchasePercentage)}
                        )
                      </strong>
                    </ValuationButton>
                  </div>
                </AccountListItem>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <AccountListItem>
                  <InfoText>Annual Appreciation</InfoText>
                </AccountListItem>
                <AccountListItem>
                  <div style={{ width: "100px", height: "30px" }}>
                    <ValuationButton>
                      <strong>
                        {new Intl.NumberFormat("en-US", {
                          style: "percent",
                        }).format(annualAppreciation)}
                      </strong>
                    </ValuationButton>
                  </div>
                </AccountListItem>
              </div>
            </AccountList>
          </AccountSection>
          {mortgage && (
            <AccountSection>
              <AccountLabel>Mortgage</AccountLabel>
              <RowContainer
                // This is a dummy action
                onClick={() => alert("You have navigated to the mortgage page")}
              >
                <AccountList>
                  <AccountListItem>
                    <InfoText>
                      {new Intl.NumberFormat("en-GB", {
                        style: "currency",
                        currency: "GBP",
                      }).format(
                        Math.abs(account.associatedMortgages[0].currentBalance)
                      )}
                    </InfoText>
                  </AccountListItem>
                  <AccountListItem>
                    <InfoText>{account.associatedMortgages[0].name}</InfoText>
                  </AccountListItem>
                </AccountList>
              </RowContainer>
            </AccountSection>
          )}
          <Button
            // This is a dummy action
            onClick={() => alert("You have navigated to the edit account page")}
          >
            Edit account
          </Button>
        </Inset>
      )}
    </div>
  );
};

export default Detail;
