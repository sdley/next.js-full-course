"use client";

export default function ErrorBoundary({ error }: {error: Error}) {
    return (
        <>
            <div>Error in reviewId</div>
            <h4>Second method to handle/display the error message</h4>
            <div>{ error.message }</div>
        </>
    );
}