import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ThemeContext } from "../../features/ThemeContext";

const TagComponent = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  width: fit-content;
  height: 32px;
  line-height: 32px;
  padding: 0 12px;
  font-size: 0.875rem;
  border-radius: 20px;
  text-decoration: none;
`;

function Tag({ children, variant, to, className }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <TagComponent
        variant={variant}
        className={className ? `tag-wrapper ${className}` : `tag-wrapper`}
        style={{ background: theme.tagColor, color: theme.color }}
      >
        <FiberManualRecordIcon
          fontSize="10px"
          sx={{
            color:
              variant === "leader"
                ? "#e10689"
                : variant === "writer"
                ? "#04baf6"
                : variant === "external"
                ? "#f18509"
                : "#1dbf2f",
          }}
        />
        {children}
      </TagComponent>
    </Link>
  );
}

export default Tag;
