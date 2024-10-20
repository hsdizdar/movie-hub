import { Outlet, createRootRoute } from "@tanstack/react-router";

import { ErrorBoundary } from "components/ErrorBoundary/ErrorBoundary";

export const Route = createRootRoute({
  component: () => (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  ),
});
