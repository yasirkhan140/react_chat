import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

// hooks
import { useRedux } from "../../hooks/index.ts";

// components
import NonAuthLayoutWrapper from "../../components/NonAutnLayoutWrapper.tsx";
import withRouter from "../../components/withRouter.tsx";

// actions
import { logoutUser } from "../../redux//auth/login/actions.ts";

const Logout = (props: any) => {
  // global store
  const { dispatch } = useRedux();

  useEffect(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  // if (isUserLogout) {
  //   return <Redirect to="/auth-login" />;
  // }

  return (
    <NonAuthLayoutWrapper>
      <Row className="justify-content-center my-auto">
        <Col sm={8} lg={6} xl={5} className="col-xxl-4">
          <div className="py-md-5 py-4 text-center">
            <div className="avatar-xl mx-auto">
              <div className="avatar-title bg-soft-primary text-primary h1 rounded-circle">
                <i className="bx bxs-user"></i>
              </div>
            </div>
            <div className="mt-4 pt-2">
              <h5>You are Logged Out</h5>
              <p className="text-muted font-size-15">
                Thank you for using{" "}
                <span className="fw-semibold text-dark">Doot</span>
              </p>
              <div className="mt-4">
                <Link
                  to="/auth-login"
                  className="btn btn-primary w-100 waves-effect waves-light"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </NonAuthLayoutWrapper>
  );
};

export default withRouter(Logout);
