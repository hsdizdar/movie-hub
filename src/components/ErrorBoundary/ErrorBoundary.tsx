import React, { ReactNode } from "react";

import { Flex, Text } from "@mantine/core";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

export class ErrorBoundary extends React.PureComponent<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return (
        <Flex
          flex={1}
          direction="column"
          justify="center"
          align="center"
          mih={"100vh"}
        >
          <Text size="xl">Opps, that's our bad!</Text>
          <Text>
            We're not exactly sure what happened, but something went wrong!
          </Text>
          <Text fs="italic">{this.state.error.message}</Text>
        </Flex>
      );
    }

    return this.props.children;
  }
}
