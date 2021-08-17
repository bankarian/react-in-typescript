import { Box, Snackbar, SnackbarProps } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import ReactDOM from "react-dom";

const globalCtx = React.createContext<SnackbarContext>({} as SnackbarContext);

const InjectedSnackbar: React.FC<SnackbarProps> = (props) => {
  const { container } = useContext(globalCtx) || ({} as SnackbarContext);

  // inject Snackbar into container
  return container
    ? ReactDOM.createPortal(<Snackbar {...props} />, container)
    : null;
};

export interface SnackbarContext {
  container: Element;
  open: (props: SnackbarProps) => void;
  close: () => void;
}

export const useSnackBar = () => {
  const { open, close } = useContext(globalCtx) || ({} as SnackbarContext);
  return { open, close };
};

export const SnackbarProvider: React.FC = ({ children }) => {
  const containerRef = useRef<any>();
  const [context, setContext] = useState<SnackbarContext>();
  const [props, setProps] = useState<SnackbarProps>();
  const [open, setOpen] = useState<boolean>(false);

  // initialize during didmount
  useEffect(() => {
    setContext((p) => ({
      container: containerRef.current as Element,
      open: (props) => {
        setProps(props);
        setOpen(true);
      },
      close: () => setOpen(false),
    }));
  }, []);

  return (
    <div>
      <globalCtx.Provider value={context as SnackbarContext}>
        {children}
        <InjectedSnackbar open={open} {...props} />
      </globalCtx.Provider>
      <div ref={containerRef} />
    </div>
  );
};
