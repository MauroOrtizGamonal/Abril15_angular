// En el archivo Loan.ts
export interface Loan {
    principal: number;
    interestRate: number;
}

export interface ConventionalLoan extends Loan {
    months: number;
}

